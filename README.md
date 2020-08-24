# Lämmittelytehtävä

Tässä harjoituksessa opetellaan vastaamaan yksittäiseen 
tehtävään. Tehtävä kopioidaan ensin GitHubista omalle 
koneelle, jossa siihen tehdään tarvittavat muutokset. 
Muutosten toiminnallisuutta voi testata suorittamalla
tehtävän mukana tulevan testausskriptin. Lopuksi tehdyt
muutokset viedään ensin paikalliseen kopioon ja sieltä
siirretään GitHubissa olevaan versioon. GitHub tekee 
muutosten jälkeen automaattisen tarkistuksen ja merkitsee
tehtävän onnistuneeksi. 

Etene seuraavasti:

1. Kopioi tehtävän lähdekoodi GitHub-repositorysta 
   omalle koneelle. Tämän voit tehdä suorittamalla komentorivillä komennon:
    ```
    git clone (laita tähän repon GitHub-osoite)
    ```
   Voit vaihtoehtoisesti kopioida repon GitHub Desktop -ohjelmassa.

2. Etsi lähdekoodeista tehtava-kansion sisältä 
   **tehtava.html** -tiedosto ja avaa se editoriin.

3. Muokkaa html-tiedostoa ohjeiden mukaisesti eli lisää 
   ohjeissa kuvattu teksti div-tagien väliin. Älä sijoita
   tekstiä <\!-- ja  --> -merkkien väliin, sinne sijoitettu teksti ei tulostu näkyviin!

4. Voit tarkistaa miltä tekemäsi muutokset näyttävät avaamalla 
   html-sivun selaimessa. 

5. Asenna testiskriptin käyttämä testcafe-paketti 
   suorittamalla komentorivillä komento:
    ```
    npm install -g testcafe
    ```
   Huomaa, että tämän asennuksen tarvitsee tehdä vain kerran, 
   seuraavien tehtävien kohdalle sinun ei tarvitse asentaa sitä uudelleen.

6. Voit tarkistaa hyväksytäänkö tekemäsi muutokset 
   suorittamalla testausskriptit tehtäväkansiossa komennolla: 
    ```
    npm test
    ```

7. Jos olet tyytyväinen tekemiisi muutoksiin, niin vie 
   muutokset paikalliseen git-repoon tekemällä Visual Studio Codessa commit tai komentorivillä seuraavilla komennoilla:
    ```
    git add .
    git commit -m "Tehtävän ratkaisu"
    ```

8. Vie tekemäsi muutokset GitHubiin Visual Studio 
   Codessa push-toiminnolla tai seuraavalla komennolla komentorivillä:
    ```
    git push
    ```

