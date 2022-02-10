import React, { useEffect, useState } from 'react'
import Loading from '../../../components/Loading';
import { API } from '../../../config/api';

const Launchpad = () => {

    // fetch launchpad
    const [loading, setLoading] = useState(true);
    const [launchpads, setLaunchpads] = useState(null);
    const fetchLaunchpad = async () => {
        try {
            setLoading(true);
            const response = await API("/launchpads");
            setLaunchpads(response.data.data.launchpads);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchLaunchpad();
    }, [])
    

    const handleAdd = () => {
        console.log('add launchpad')
        // $('#launchpadModal').modal('show')
        // $('#launchpadLabel').text('Edit Launchpad')
    }

    const handleEdit = id => {
        console.log(id)
        // $('#launchpadModal').modal('show')
        // $('#launchpadLabel').text('Edit Launchpad')
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
                        <h1>Digichain - Launchpad List</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Launchpad List</li>
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
                                    <h3 className="card-title">Launchpad List</h3>
                                </div>
                                <div className="card-body">
                                    {/* <button className='btn btn-primary mb-3' onClick={() => handleAdd()}>Add Launchpad</button> */}
                                    <table id="tableLaunchpad" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Token Address</th>
                                                <th>Presale Address</th>
                                                <th>Token Presale</th>
                                                <th>Token Liquidity</th>
                                                <th>Option</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {launchpads.map(launchpad => 
                                                <tr key={launchpad.id}>
                                                    <td>{launchpad.name}</td>
                                                    <td>{launchpad.description}</td>
                                                    <td>{launchpad.token_address}</td>
                                                    <td>{launchpad.presale_address}</td>
                                                    <td>{launchpad.token_presale}</td>
                                                    <td>{launchpad.token_liquidity}</td>
                                                    <td><i className='fas fa-edit text-primary' role='button' onClick={() => handleEdit(launchpad.id)}></i> <i className='fas fa-trash-alt text-danger' role='button' onClick={() => handleDelete(launchpad.id)}></i></td>
                                                </tr>
                                            )}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Token Address</th>
                                                <th>Presale Address</th>
                                                <th>Token Presale</th>
                                                <th>Token Liquidity</th>
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

            <div className="modal fade" id="launchpadModal" tabIndex="-1" aria-labelledby="launchpadLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="launchpadLabel">Add Launchpad</h5>
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

export default Launchpad