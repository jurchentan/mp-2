
export type GamesProps = {
    gameId: string;
    date: string;
    arena: string;
    visitorTeam: string;
    visitorPts: number;
    homeTeam: string;
    homePts: number;

    isPlayoff: boolean;
};