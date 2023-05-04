type a1 = string;
type a2 = a1 extends string ? string : null;

type a3 = undefined;
type a4 = number;

type d = a1 extends null ? null : a3 extends number ? number : a4 extends number ? number : string;


type Habibi = {
    wife1: string;
    wife2: string;
};

type CheckProperty<T, k> = T extends k ? true : false;

type CheckWife1 = CheckProperty<Habibi, { wife1: string }>;


type Bandhubi = "Mounika" | "Soniya" | "Sowmya";

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Mounika">;