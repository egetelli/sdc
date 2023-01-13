import React, { useState } from "react";
import Navbar from './Navbar'


export const wallet = (props) => {



    return (

        <div>

            <body>


                <div class="container">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="alert alert-danger" id="alert-error-https" style="display: none">
                                You can run this example only over HTTPS connection.
                            </div>
                            <div id="prepare">
                                <button
                                    class="my-3 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                                    id="btn-connect">
                                    Connect wallet
                                </button>
                            </div>

                            <div id="connected" style="display: none">

                                <button
                                    class="my-3 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                                    id="btn-disconnect">
                                    Disconnect wallet
                                </button>



                                <div id="network">
                                    <p>
                                        <strong>Connected blockchain:</strong> <span id="network-name"></span>
                                    </p>

                                    <p>
                                        <strong>Selected account:</strong> <span id="selected-account"></span>
                                    </p>

                                </div>


                                <h3>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; All account balances</h3>

                                <table class="table table-listing">
                                    <thead>
                                        <th>Address</th>
                                        <th>ETH balance</th>
                                    </thead>

                                    <tbody id="accounts">
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="templates" style="display: none">
                    <template id="template-balance">
                        <tr>
                            <th class="address"></th>
                            <td class="balance"></td>
                        </tr>
                    </template>
                </div>


                <script type="text/javascript" src="https://unpkg.com/web3@1.2.11/dist/web3.min.js"></script>
                <script type="text/javascript" src="https://unpkg.com/web3modal@1.9.0/dist/index.js"></script>
                <script type="text/javascript" src="https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js"></script>
                <script type="text/javascript"
                    src="https://unpkg.com/@walletconnect/web3-provider@1.2.1/dist/umd/index.min.js"></script>
                <script type="text/javascript" src="https://unpkg.com/fortmatic@2.0.6/dist/fortmatic.js"></script>
                <script type="text/javascript" src="../../../example.js"></script>
            </body>
        </div>
    )
}
export default wallet