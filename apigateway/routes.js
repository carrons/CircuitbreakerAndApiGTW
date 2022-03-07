//Axios installeren voor interne HTTP communicatie
require('dotenv').config(); 
const express        = require('express');
const router         = new express.Router();
const axios          = require('axios');
const CircuitBreaker = require('opossum');
//const postService    =  Haal dit uit environment variables
//We willen nl. altijd dat we buiten de code om van (micro) services 
//kunnen wisselen of veranderen wanneer dat nodig is.

const options = {
    timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 3000 // After 3 seconds, try again.
  };

// instantieer hier de circuit breaker
// const circuitBreaker ...
let serviceAddress = null;

router.post( '/posts', ( req, res ) => {
        let value = req.body;
        if( !value ) return res.send( 'body is leeg!' );
        console.log(postService);
        //+++circuit breaker patroon +++++++++++++++++++++++++++++++++++++++++++
        /*
         implementeer hier de circuitBreaker fire method. Daarmee zorg je 
         ervoor dat je request verloopt via je circuitbreaker
        */
            
        })

// Deze functie kun je gebruiken in je fire method van de circuit breaker
function callService(method,serviceAddress,resource,body){return new Promise(( resolve,reject )=>{
    serviceAddress = formatWithSlashes( serviceAddress );
    if( method == 'post' ){
        axios.post(`${ serviceAddress }${ resource }`,body ) 
         .then(( mess )=>{
            resolve( 'van blogrouter : '+ mess.data);
         }).catch(( e )=>{
             console.log('Error door axios ' + e.toString())
             reject( 'Error tijdens request in axios');
         });
   
        }else{
            axios.get(`${serviceAddress}${resource}`)
            .then((mess)=>{
            resolve('van response blogroute : ' + mess.data);   
            })
        }
    })
}
//gebruik de .fallback(()=>{}) functie om bijv. een bericht naar de gebruiker te sturen.
//Deze kun je hier maken.

//Helper functie om het gedoe met slashes te voorkomen
function formatWithSlashes(serviceAddress){
    return (postService.endsWith('/'))? serviceAddress : '/';
}

module.exports = router    
