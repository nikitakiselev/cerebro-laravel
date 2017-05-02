import { memoize } from 'cerebro-tools'
import algoliasearch from "algoliasearch";

const algolia_app_id = '8BB87I11DE';
const algolia_search_key = '8e1d446d61fce359f69cd7c8b86a50de';
const client = algoliasearch(algolia_app_id, algolia_search_key);
const index = client.initIndex('docs');

/**
 * Get google suggestions for entered query
 * @param  {String} query
 * @return {Promise}
 */
const getSuggestions = (query) => {
    return index.search(query, {
        hitsPerPage: 5,
        tagFilters: [version``]
    });
}


export default memoize(getSuggestions, {
    length: false,
    promise: 'then',
    // Expire translation cache in 30 minutes
    maxAge: 30 * 60 * 1000,
    preFetch: true
})
