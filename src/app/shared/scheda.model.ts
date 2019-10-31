import { Allenamento } from './allenamento.model';
export interface Scheda extends Allenamento {
    allenamenti: Allenamento[];
    gruppo_muscolare: string;
    settimane: number;
    scadenza: Date;
}
