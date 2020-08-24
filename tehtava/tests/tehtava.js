import { Selector } from 'testcafe';

fixture `Lämmittelytehtävä`
    .page `../tehtava.html`;

test('Tulostetaan vaadittu teksti', async t => {
   const teksti = Selector("#teksti");

   await t
     .expect(teksti.textContent).match(/Hei \w+, nyt aloitetaan koodaaminen!/,'oikea sisältö');
});