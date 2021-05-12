import axios from 'axios';

const token: string = 'b459b1e083mshf21563fab78c454p1cbb6cjsnd49bfda4db83';
const url: string = 'https://covid-19-statistics.p.rapidapi.com/';

export const fetchReports = async () => {
    const ans = await axios.get(`${url}reports`, {
        headers: {
            'x-rapidapi-key': token,
            'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
        }
    });
    if(ans && ans.data && ans.data.data){
        return ans.data.data;
    }else {
        return [];
    }
}
