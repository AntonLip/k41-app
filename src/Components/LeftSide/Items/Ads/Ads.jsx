import React from 'react'
import Announcement from './Announcement/Announcement'
import ItemLeftSideBar from '../ItemLeftSideBar'
const Ads = (props) => {
    return (
        <ItemLeftSideBar itemTitle={props.itemTitle}>
            <div class="leftsitebar-news leftsitebar__news">
                <Announcement/>
                <Announcement/>
                <Announcement/>
                <div href="#" class="leftsitebar-news-control leftsitebar-news__control">
                    <a href="#" class="leftsitebar-news-control__item leftsitebar-news-control__item--prev"></a>
                    <a href="#" class="leftsitebar-news-control__item leftsitebar-news-control__item--add"></a>
                    <a href="#" class="leftsitebar-news-control__item leftsitebar-news-control__item--next"></a>
                </div>
            </div>
        </ItemLeftSideBar>
    )
}

export default Ads
