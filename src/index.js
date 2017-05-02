import React from 'react'

import Preview from './Preview'
import icon from './icon.png'

const id = 'search-web'
const order = 11
const LARAVEL_REGEX = /laravel\s+(.*)|l\s+(.*)/i;

const LaravelDocsSeacher = ({term, display, actions}) => {
    if (LARAVEL_REGEX.test(term)) {
        let [, query] = LARAVEL_REGEX.exec(term);

        var search = (link) => {
            actions.open(`https://laravel.com/docs/${link}`)
            actions.hideWindow()
        }

        display({
            icon,
            title: `Search Laravel docs for: ${query}`,
            subtitle: 'Documentation search',
            onSelect: () => openLaravelDocs(),
            getPreview: () => <Preview query={term} key={term} search={search}/>
        });
    }
}

module.exports = {
    fn: LaravelDocsSeacher,
}
