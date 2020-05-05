export enum Type {
    Default = "Select your type",
    RADIO = "RADIO",
    CHECKBOX = "CHECKBOX",
    TEXTFIELD = "TEXTFIELD",
    TEXTAREA = "TEXTAREA"
}
export enum Level {
    Default = "Select your level",
    CD = "CD",
    CJ = "CJ",
    CSD = "CSD",
    CLD = "CLD"
}
export enum Techno {
    Default = "Select your technology",
    JAVAEE = "JAVAEE",
    DOTNET = "DOTNET",
    SAP = "SAP"
}

export class Question {
    id: number;
    constructor(
        public content: string,
        public level: Level,
        public techno: Techno,
        public type: Type,
        public countdown: number,
        public score:number,
        public proposedResponses: Array<ProposedResponse>,
        
       
        ) { }

}
export class ProposedResponse {
    constructor(
        public content: string,
        public state: boolean,
        public score: number,
        public checked?: boolean
        

    ) { }
}
export class QuizQuestion {
    constructor(
        public question: Question,
        public answers: Array<Answer>
    ) { }
}
export class Answer {
    constructor(
        public score: number,
        public content: string
    ) { }
}

