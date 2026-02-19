import styled from "styled-components";
import type { GamesProps } from "./types.ts";

const GamesPreviewDiv = styled.div`
    margin: 12px auto;
    padding: 2px;
    width: 400px;
    background-color: lightgray;
`;

export default function GamesPreview({Games}: {Games: GamesProps}) {
    return (
        <GamesPreviewDiv>
            <p>
                {Games.date.split("T")[0]}
            </p>
            <h4>
                {Games.arena}
            </h4>
            <h2>
                {Games.homeTeam} {Games.homePts} - {Games.visitorPts} {Games.visitorTeam}
            </h2>
        </GamesPreviewDiv>
    )
}