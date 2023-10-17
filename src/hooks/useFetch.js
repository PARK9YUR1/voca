import { useEffect, useState } from "react";

export default function useFetch(url) {
    // 1) data라는 상태값이 있고, API 주소를 넘겨받아
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // 2) 패치하고
        fetch(url)
            // 3) 응답받은 데이터를 setData 해줌.
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            });
    }, [url]);

    // 4) 리턴
    return data;
}