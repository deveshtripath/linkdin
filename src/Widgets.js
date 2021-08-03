import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import "./Widgets.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle=(heading,subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkdin News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("To download an asset, click on the links in the right-hand column. Google Drive Branding Assets.","news is always good")}
            {newsArticle("To download an asset, click on the links in the right-hand column. Google Drive Branding Assets.","news is always good")}
            {newsArticle("To download an asset, click on the links in the right-hand column. Google Drive Branding Assets.","news is always good")}
            {newsArticle("To download an asset, click on the links in the right-hand column. Google Drive Branding Assets.","news is always good")}
            {newsArticle("To download an asset, click on the links in the right-hand column. Google Drive Branding Assets.","news is always good")}
        </div>
    )
}

export default Widgets
