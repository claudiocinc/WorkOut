import { Esercizio } from './esercizio.model';
export interface Allenamento extends Esercizio {
    esercizi: Esercizio[];
    settimana: number;
    gruppo_muscolare: string;
}
