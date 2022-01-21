import Web3 from "web3";

export const useTransactionMonitor = () => {
    const web3 = new Web3("https://bsc-dataseed.binance.org");

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const expectedBlockTime = 3000; 

    const monitorTransaction = async (error,transactonHash, callback) =>{
        let transactionReceipt = null
        //console.log(transactonHash);
        while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
            try {
                transactionReceipt = await web3.eth.getTransactionReceipt(transactonHash);
                await sleep(expectedBlockTime)
            } catch (error) {
                console.log(error)
                transactionReceipt="dummy"
            }
            await sleep(expectedBlockTime)
            callback();
        }
    }

    return {
        monitorTransaction
    };
};

