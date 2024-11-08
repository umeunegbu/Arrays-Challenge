function matchingStrings(stringList, queries) {
    let resultsArray = [];
    let results = [];

    for(let i=0; i<queries.length; i++){
        resultsArray.push([]);

        for(let j=0; j<stringList.length; j++){
            if(stringList[j] === queries[i]){
                resultsArray[i].push(stringList[j]);
            }
            
        }

        results.push(resultsArray[i].length);

    }

    return results;

}
module.exports = {matchingStrings};