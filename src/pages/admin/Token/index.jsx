import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading';
import { API } from '../../../config/api';
const Token = () => {

    // fetch token
    const [loading, setLoading] = useState(true);
    const [tokens, setTokens] = useState(null);
    const fetchToken = async () => {
        try {
            setLoading(true);
            const response = await API("/tokens");
            setTokens(response.data.data.tokens);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchToken();
    }, [])
    

    const handleAdd = () => {
        console.log('add token')
        // $('#tokenModal').modal('show')
        // $('#tokenLabel').text('Edit Token')
    }

    const handleEdit = id => {
        console.log(id)
        // $('#tokenModal').modal('show')
        // $('#tokenLabel').text('Edit Token')
    }
    
    const handleDelete = id => {
        console.log(id);
    }
    
    return (
        loading ? <Loading /> :
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>Digichain - Token List</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Token List</li>
                        </ol>
                    </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Token List</h3>
                                </div>
                                <div className="card-body">
                                    {/* <button className='btn btn-primary mb-3' onClick={() => handleAdd()}>Add Token</button> */}
                                    <table id="tableToken" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Token Address</th>
                                                <th>Type</th>
                                                <th>Name</th>
                                                <th>Symbol</th>
                                                <th>Decimal</th>
                                                <th>Total Supply</th>
                                                <th>Option</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tokens.map(token => 
                                                <tr key={token.id}>
                                                    <td>{token.address}</td>
                                                    <td>{token.type}</td>
                                                    <td>{token.name}</td>
                                                    <td>{token.symbol}</td>
                                                    <td>{token.decimal}</td>
                                                    <td>{token.total_supply}</td>
                                                    <td><i className='fas fa-edit text-primary' role='button' onClick={() => handleEdit(token.id)}></i> <i className='fas fa-trash-alt text-danger' role='button' onClick={() => handleDelete(token.id)}></i></td>
                                                </tr>
                                            )}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Token Address</th>
                                                <th>Type</th>
                                                <th>Name</th>
                                                <th>Symbol</th>
                                                <th>Decimal</th>
                                                <th>Total Supply</th>
                                                <th>Option</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="tokenModal" tabIndex="-1" aria-labelledby="tokenLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="tokenLabel">Add Token</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Token