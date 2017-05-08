import React, { Component, PropTypes } from 'react'
import Loading from './../Loading'
import Preload from './../Preload'
import KeyboardNav from './../KeyboardNav'
import KeyboardNavItem from './../KeyboardNavItem'
import getSuggestions from './getSuggestions'
import styles from './styles.css'

class Preview extends Component {
    renderSuggestions(suggestions, searchFn) {
        let hits = suggestions.hits;

        console.log(hits);

        const className = styles.wrapper;

        return (
            <div className={className}>
                <KeyboardNav>
                    <ul className={styles.list}>
                        {
                            hits.map(hit => {
                                return <KeyboardNavItem
                                    key={hit.objectID}
                                    tagName={'li'}
                                    onSelect={() => searchFn(hit.link)}
                                    hit={hit}
                                />
                            })
                        }
                    </ul>
                </KeyboardNav>
            </div>
        )
    }
    render() {
        const { query, search } = this.props
        return (
            <Preload promise={getSuggestions(query)} loader={<Loading />}>
                {(suggestions) => this.renderSuggestions(suggestions || [], search)}
            </Preload>
        )
    }
}

Preview.propTypes = {
    query: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired
}

export default Preview
