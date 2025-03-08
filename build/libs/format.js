export function formatUntappdBeerItem(beerItem) {
    return [
        `Basic beer item properties`,
        `---`,
        `checkin_count: ${beerItem.checkin_count}`,
        `have_had: ${beerItem.have_had}`,
        `your_count: ${beerItem.your_count}`,
        `Beer properties`,
        `---`,
        `bid: ${beerItem.beer.bid}`,
        `beer_name: ${beerItem.beer.beer_name}`,
        `beer_label: ${beerItem.beer.beer_label}`,
        `beer_abv: ${beerItem.beer.beer_abv}`,
        `beer_ibu: ${beerItem.beer.beer_ibu}`,
        `beer_description: ${beerItem.beer.beer_description}`,
        `created_at: ${beerItem.beer.created_at}`,
        `beer_style: ${beerItem.beer.beer_style}`,
        `auth_rating: ${beerItem.beer.auth_rating}`,
        `wish_list: ${beerItem.beer.wish_list}`,
        `Optional beer properties`,
        `---`,
        ...(beerItem.beer.in_production !== undefined
            ? [`in_production: ${beerItem.beer.in_production}`]
            : []),
        ...(beerItem.beer.beer_slug
            ? [`beer_slug: ${beerItem.beer.beer_slug}`]
            : []),
        ...(beerItem.beer.beer_style_id
            ? [`beer_style_id: ${beerItem.beer.beer_style_id}`]
            : []),
        ...(beerItem.beer.beer_active !== undefined
            ? [`beer_active: ${beerItem.beer.beer_active}`]
            : []),
        ...(beerItem.beer.is_in_production !== undefined
            ? [`is_in_production: ${beerItem.beer.is_in_production}`]
            : []),
        ...(beerItem.beer.is_vintage !== undefined
            ? [`is_vintage: ${beerItem.beer.is_vintage}`]
            : []),
        ...(beerItem.beer.is_variant !== undefined
            ? [`is_variant: ${beerItem.beer.is_variant}`]
            : []),
        ...(beerItem.beer.is_homebrew !== undefined
            ? [`is_homebrew: ${beerItem.beer.is_homebrew}`]
            : []),
        ...(beerItem.beer.rating_count !== undefined
            ? [`rating_count: ${beerItem.beer.rating_count}`]
            : []),
        ...(beerItem.beer.rating_score !== undefined
            ? [`rating_score: ${beerItem.beer.rating_score}`]
            : []),
        `Brewery properties`,
        `---`,
        `brewery_id: ${beerItem.brewery.brewery_id}`,
        `brewery_name: ${beerItem.brewery.brewery_name}`,
        `brewery_label: ${beerItem.brewery.brewery_label}`,
        `country_name: ${beerItem.brewery.country_name}`,
        `Optional brewery properties`,
        `---`,
        ...(beerItem.brewery.brewery_slug
            ? [`brewery_slug: ${beerItem.brewery.brewery_slug}`]
            : []),
        ...(beerItem.brewery.brewery_active !== undefined
            ? [`brewery_active: ${beerItem.brewery.brewery_active}`]
            : []),
        ...(beerItem.brewery.beer_count !== undefined
            ? [`brewery_beer_count: ${beerItem.brewery.beer_count}`]
            : []),
        `Brewery contact information`,
        `---`,
        ...(beerItem.brewery.contact?.twitter
            ? [`brewery_twitter: ${beerItem.brewery.contact.twitter}`]
            : []),
        ...(beerItem.brewery.contact?.facebook
            ? [`brewery_facebook: ${beerItem.brewery.contact.facebook}`]
            : []),
        ...(beerItem.brewery.contact?.instagram
            ? [`brewery_instagram: ${beerItem.brewery.contact.instagram}`]
            : []),
        ...(beerItem.brewery.contact?.url
            ? [`brewery_url: ${beerItem.brewery.contact.url}`]
            : []),
        `Brewery location`,
        `---`,
        ...(beerItem.brewery.location?.brewery_city
            ? [`brewery_city: ${beerItem.brewery.location.brewery_city}`]
            : []),
        ...(beerItem.brewery.location?.brewery_state
            ? [`brewery_state: ${beerItem.brewery.location.brewery_state}`]
            : []),
        ...(beerItem.brewery.location?.venue_address
            ? [`venue_address: ${beerItem.brewery.location.venue_address}`]
            : []),
        ...(beerItem.brewery.location?.venue_city
            ? [`venue_city: ${beerItem.brewery.location.venue_city}`]
            : []),
        ...(beerItem.brewery.location?.venue_state
            ? [`venue_state: ${beerItem.brewery.location.venue_state}`]
            : []),
        ...(beerItem.brewery.location?.lat !== undefined
            ? [`latitude: ${beerItem.brewery.location.lat}`]
            : []),
        ...(beerItem.brewery.location?.lng !== undefined
            ? [`longitude: ${beerItem.brewery.location.lng}`]
            : []),
        "+++ End",
    ].join("\n");
}
export function formatUntappdBeerInfo(beerInfo) {
    return [
        `Beer Information`,
        `---`,
        `bid: ${beerInfo.bid}`,
        `beer_name: ${beerInfo.beer_name}`,
        `beer_label: ${beerInfo.beer_label}`,
        `beer_abv: ${beerInfo.beer_abv}`,
        `beer_ibu: ${beerInfo.beer_ibu}`,
        `beer_description: ${beerInfo.beer_description}`,
        `created_at: ${beerInfo.created_at}`,
        `beer_style: ${beerInfo.beer_style}`,
        `auth_rating: ${beerInfo.auth_rating}`,
        `Optional Beer Properties`,
        `---`,
        ...(beerInfo.in_production !== undefined
            ? [`in_production: ${beerInfo.in_production}`]
            : []),
        ...(beerInfo.beer_slug ? [`beer_slug: ${beerInfo.beer_slug}`] : []),
        ...(beerInfo.beer_style_id
            ? [`beer_style_id: ${beerInfo.beer_style_id}`]
            : []),
        ...(beerInfo.beer_active !== undefined
            ? [`beer_active: ${beerInfo.beer_active}`]
            : []),
        ...(beerInfo.is_in_production !== undefined
            ? [`is_in_production: ${beerInfo.is_in_production}`]
            : []),
        ...(beerInfo.is_vintage !== undefined
            ? [`is_vintage: ${beerInfo.is_vintage}`]
            : []),
        ...(beerInfo.is_variant !== undefined
            ? [`is_variant: ${beerInfo.is_variant}`]
            : []),
        ...(beerInfo.is_homebrew !== undefined
            ? [`is_homebrew: ${beerInfo.is_homebrew}`]
            : []),
        ...(beerInfo.rating_count !== undefined
            ? [`rating_count: ${beerInfo.rating_count}`]
            : []),
        ...(beerInfo.rating_score !== undefined
            ? [`rating_score: ${beerInfo.rating_score}`]
            : []),
        `Beer Stats`,
        `---`,
        `total_count: ${beerInfo.stats.total_count}`,
        `monthly_count: ${beerInfo.stats.monthly_count}`,
        `total_user_count: ${beerInfo.stats.total_user_count}`,
        `user_count: ${beerInfo.stats.user_count}`,
        `Brewery Information`,
        `---`,
        `brewery_id: ${beerInfo.brewery.brewery_id}`,
        `brewery_name: ${beerInfo.brewery.brewery_name}`,
        `brewery_label: ${beerInfo.brewery.brewery_label}`,
        `country_name: ${beerInfo.brewery.country_name}`,
        `Optional Brewery Properties`,
        `---`,
        ...(beerInfo.brewery.brewery_slug
            ? [`brewery_slug: ${beerInfo.brewery.brewery_slug}`]
            : []),
        `Brewery Location`,
        `---`,
        ...(beerInfo.brewery.location?.brewery_city
            ? [`brewery_city: ${beerInfo.brewery.location.brewery_city}`]
            : []),
        ...(beerInfo.brewery.location?.brewery_state
            ? [`brewery_state: ${beerInfo.brewery.location.brewery_state}`]
            : []),
        ...(beerInfo.brewery.location?.venue_address
            ? [`venue_address: ${beerInfo.brewery.location.venue_address}`]
            : []),
        ...(beerInfo.brewery.location?.venue_city
            ? [`venue_city: ${beerInfo.brewery.location.venue_city}`]
            : []),
        ...(beerInfo.brewery.location?.venue_state
            ? [`venue_state: ${beerInfo.brewery.location.venue_state}`]
            : []),
        ...(beerInfo.brewery.location?.lat !== undefined
            ? [`latitude: ${beerInfo.brewery.location.lat}`]
            : []),
        ...(beerInfo.brewery.location?.lng !== undefined
            ? [`longitude: ${beerInfo.brewery.location.lng}`]
            : []),
        `Media Information`,
        `---`,
        `media_count: ${beerInfo.media.count}`,
        `Similar Beers`,
        `---`,
        `similar_beers_count: ${beerInfo.similar.count}`,
        `Friends Information`,
        `---`,
        `friends_count: ${beerInfo.friends.count}`,
        `Vintages Information`,
        `---`,
        `vintages_count: ${beerInfo.vintages.count}`,
        ...(beerInfo.vintages.count > 0 ? [`Has vintage versions available`] : []),
        "Media Information",
        Array.isArray(beerInfo.media.items)
            ? beerInfo.media.items.map((m) => formatUntappdMediaItem(m))
            : formatUntappdMediaItem(beerInfo.media.items),
        `+++ End`,
    ].join("\n");
}
export function formatUntappdMediaItem(item) {
    return [
        `Media Item Information`,
        `---`,
        `created_at: ${item.created_at}`,
        `Beer Information`,
        `---`,
        `bid: ${item.beer.bid}`,
        `beer_name: ${item.beer.beer_name}`,
        `beer_style: ${item.beer.beer_style}`,
        `beer_abv: ${item.beer.beer_abv}`,
        `Brewery Information`,
        `---`,
        `brewery_id: ${item.brewery.brewery_id}`,
        `brewery_name: ${item.brewery.brewery_name}`,
        `country_name: ${item.brewery.country_name}`,
        `Venue Information`,
        `---`,
        ...(Array.isArray(item.venue) && item.venue.length > 0
            ? [
                `venue_id: ${item.venue[0].venue_id}`,
                `venue_name: ${item.venue[0].venue_name}`,
                `primary_category: ${item.venue[0].primary_category}`,
                ...(item.venue[0].location?.venue_city
                    ? [`venue_city: ${item.venue[0].location.venue_city}`]
                    : []),
                ...(item.venue[0].location?.venue_state
                    ? [`venue_state: ${item.venue[0].location.venue_state}`]
                    : []),
            ]
            : [`No venue information available`]),
        `+++ End`,
    ].join("\n");
}
export function formatUntappdBeerSearchResult(result) {
    const payload = [];
    result.response.beers.items.forEach((beer) => {
        payload.push(formatUntappdBeerItem(beer));
    });
    return payload.join("\n");
}
export function formatUntappdBeerInfoResult(result) {
    return formatUntappdBeerInfo(result.response.beer);
}
