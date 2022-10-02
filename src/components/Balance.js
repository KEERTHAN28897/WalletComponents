import React from "react";



class Balance extends React.Component {

    static localCache = null;

    getAllCacheData = async (cacheName) => {
        var url = 'https://localhost:300'
      
        // List of all caches present in browser
        var names = await caches.keys()
      
        var cacheDataArray = []
      
        // Iterating over the list of caches
        var data = null;
        var flag = false;
   
        names.forEach(async(name) => {
          if(name === cacheName) {
            flag = true;

            const cacheStorage = await caches.open(name);
            console.log("cache found", name);
            // Fetching that particular cache data
            const cachedResponse = await cacheStorage.match(url);
            await cachedResponse.then((response) => response.json())
            .then((user) => {
                this.setState({
                    balance: user,
                });
            });
          }
        })
        console.log("data: ", data)
        return flag;
      };

     addDataIntoCache = (cacheName, url, response) => {
        // Converting our response into Actual Response form
        const data = new Response(JSON.stringify(response));
      
        if ('caches' in window) {
          // Opening given cache and putting our data into it
          caches.open(cacheName).then((cache) => {
            cache.put(url, data);
          });
        }
      };



    async componentDidMount() {
        try {
            //hardcoing wallet address
            if(Balance.localCache != null) {
                this.state = {
                    balance: Balance.localCache,
                };
                return;

            }

            const wallet = '0x6AE65a7033a84bb36778fEA6607A25a0d6c8EE50'
            if(this.getAllCacheData(wallet)) {
                console.log(this.getAllCacheData(wallet));
                console.log("cache ", this.getAllCacheData(wallet));
            }
            
            await fetch('https://clgw37992h.execute-api.us-west-2.amazonaws.com/beta/getbalance?wallet=' + wallet).then((response) => response.json())
            .then((user) => {
                console.log(user[0])
                this.setState({
                    balance: user,
                });
            })
            this.addDataIntoCache(wallet, 'http://localhost:50807', this.state.balance)
            Balance.localCache = this.state.balance;

            console.log(this.state);
            
        } catch(error) {
            return [];
        }
    }


    
    constructor(props) {
        super(props);
        this.state = {
            balance: [0, 0, 0, 0],
        };
    }

    render() {
        console.log("rendering again!",this.state.balance[0] )
        var value = 0;
        if(this.props.coin == 'AVAX') {
            value = this.state.balance[0];
        } else if (this.props.coin == 'FTM') {
            value = this.state.balance[1];
        } else if (this.props.coin == 'BNB') {
            value = this.state.balance[2];
        } else if (this.props.coin == 'USDC') {
            value = this.state.balance[0];
        }
        console.log('value ', this.state);
        return  <td>${value}</td>
    }

}
 
export default Balance;