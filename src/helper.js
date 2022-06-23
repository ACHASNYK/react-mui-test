export const headerPreProcessing = (data) => {
    let len = [[]];
    let a = [];
    Object.keys(data).map(e => {
        a = (Object.keys(data[e].G))
        len.push(a);
    })
    let max = len[0].length;
    let answer = len[0];
    for (let i = 1; i < len.length; i++) {
      
        if (len[i].length > max) {
            answer = len[i]
            max = len[i].length;
        }
        return answer
    }
    let result = [];
    for (let i = 1; i < answer.length; ++i) {
        let x = answer[i] - answer[i - 1];
        if (x === 1) { result.push(answer[i - 1]) } else {
            for (let y = 0; y < (x - 1); ++y) {
                result.push(answer[i - 1] + 1)
            }
        }
    }
    
    return result, console.log(result);

}

export const subheaderPreProcessing = (data) => {
   
    let item = [];
    
    Object.keys(data).map(e => { 
        Object.keys(data[e]?.G).map(i => { 
            item.push(Object.keys(data[e]?.G[i])) 
        })
        
    })
    let subYears = item[0];
    return item[0];
}