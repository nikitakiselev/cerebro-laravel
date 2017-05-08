import React, {PropTypes} from 'react'
import styles from './styles.css'

const KeyboardNavItem = ({tagName, ...props}) => {
    let className = styles.item
    className += props.className ? ` ${props.className}` : ''
    const onSelect = props.onSelect || (() => {})
    const onClick = onSelect
    const onKeyDown = (event) => {
        if (props.onKeyDown) {
            props.onKeyDown(event)
        }
        const vimO = event.keyCode === 79 && (event.metaKey || event.ctrlKey)
        if (!event.defaultPrevented && (event.keyCode === 13 || vimO)) {
            onSelect()
        }
    }
    const itemProps = {
        className,
        onClick,
        onKeyDown,
        tabIndex: 0,
    }
    const TagName = tagName || 'div'

/*let title = `<p>${hit._highlightResult.h1.value}</p>`;

                                if (hit._highlightResult.h2) {
                                    title += `<p>#${hit._highlightResult.h2.value}`;

                                    if (hit._highlightResult.h3) {
                                        title += ` > ${hit._highlightResult.h3.value}`;
                                    }

                                    if (hit._highlightResult.h4) {
                                        title += ` > ${hit._highlightResult.h4.value}`;
                                    }

                                    title += '</p>';
                                }*/

    let title = <h2>{props.hit.h1}</h2>
    let subHeader = '';
    if (props.hit.h2) {
        subHeader = <p>
            # {props.hit.h2}
            {props.hit.h3 && <span> > {props.hit.h3}</span>}
            {props.hit.h4 && <span> > {props.hit.h4}</span>}
        </p>
    }

    return (
        <TagName {...props} {...itemProps}>
            {title}
            {subHeader}
        </TagName>
    )
}

KeyboardNavItem.propTypes = {
    className: PropTypes.string,
    tagName: PropTypes.string,
    onSelect: PropTypes.func,
    onKeyDown: PropTypes.func,
}

export default KeyboardNavItem
