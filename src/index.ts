import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getBeerSearch } from "./api/getBeerSearch.js";
import { formatUntappdBeerSearchResult } from "./libs/format.js";

import dotenv from "dotenv";
dotenv.config();

export const config = {
  untappd: {
    clientId: process.env.UNTAPPED_API_CLIENT_ID,
    clientSecret: process.env.UNTAPPED_API_CLIENT_SECRET,
  },
};

// Create server instance
const server = new McpServer({
  name: "untapped",
  version: "1.0.0",
});

// Register untapped tools
server.tool(
  "beer-search",
  "Search beers on untapped",
  {
    beer: z.string().describe("The name of the beer you want to search"),
  },
  async ({ beer }) => {
    const beersData = await getBeerSearch(beer);

    if (!beersData) {
      return {
        content: [
          {
            type: "text",
            text: "Failed to retrieve untapped beer data.",
          },
        ],
      };
    }

    if (typeof beersData === "string") {
      return {
        content: [
          {
            type: "text",
            text: `Failed to retrieve untapped beer data: ${beersData}`,
          },
        ],
      };
    }

    const formattedBeerData = formatUntappdBeerSearchResult(beersData);

    return {
      content: [
        {
          type: "text",
          text: formattedBeerData,
        },
      ],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Untapped MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
