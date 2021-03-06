export const yearsPreProcessing = (data) => {
    
    let array_years = [];
    let result_array_years = [];
    let year_max = 0;
    let year_min = 0;
    let array_sub = [];
    let sub = [];
    let sub_max = 0;
    let longest_sub = [];
    
    Object.keys(data).map(e => {
        Object.keys(data[e]?.G).map(year => {
            array_years.push(year);
            sub = Object.keys(data[e]?.G[year])
            array_sub.push(sub);
        })
    });
    year_max = Math.max(...array_years);
    year_min = Math.min(...array_years);
    result_array_years.push(year_min);

    if ((year_max - year_min) > 1) {
        const gap = (year_max - year_min);
        for (let i = 1; i < gap + 1; ++i) {
            result_array_years.push(result_array_years[i - 1] + 1);
            
        }
    } else {
        result_array_years.push(year_max);
    }

    sub_max = array_sub[0].length;
    longest_sub = array_sub[0];
    
    
    for (let i = 1; i < array_sub.length; ++i) {
        if (array_sub[i].length > sub_max) {
            longest_sub = array_sub[i];
            sub_max = array_sub[i].length;
            }
       
    }
    
    return { result_array_years, longest_sub };  
}    


