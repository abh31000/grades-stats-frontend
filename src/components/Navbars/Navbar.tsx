import { Fragment } from "react";
import Media from "react-media";
import * as React from "react";
import LargeNav from "./LargeNav";
import MediumNav from "./MediumNav";
import SmallNav from "./SmallNav";

export default function Navbar():React.JSX.Element {
    return(
        <>
            <Media queries={{
                small:"(max-width: 480px)",
                medium: "(min-width: 481px) and (max-width: 950px)",
                large: "(min-width: 951px)"
            }}>
                {matches =>(
                    <Fragment>
                        {matches.small && <SmallNav></SmallNav>}
                        {matches.medium && <MediumNav></MediumNav>}
                        {matches.large && <LargeNav></LargeNav>}
                    </Fragment>
                )}
            </Media>
        </>
    )
}