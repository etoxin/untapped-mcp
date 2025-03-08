# untapped-mcp

A Untapped MCP server to be used with claude.

## Setup

### Get API Key

### Usage with Claude Desktop

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "beerSearch": {
      "command": "node",
      "args": ["/Users/adamlusted/projects/untapped-mcp/build/index.js"],
      "env": {
        "UNTAPPED_API_CLIENT_ID": "<YOUR_CLIENT_ID>",
        "UNTAPPED_API_CLIENT_SECRET": "<YOUR_CLIENT_SECRET>"
      }
    }
  }
}
```
