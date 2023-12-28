export default function ComputerRepairing() {
    return (
        <>
            <div className=" mx-md-5 mx-1  " id="LanguageContainer">
                <div id="myLanguageHeader"
                    className="container-fluid w-100 p-2  border border-light  myshadow text-center " style={{ background: 'white', marginTop:'4rem' }}>
                    < h1 >
                        <b style={{letterSpacing: '1px'}}>
                            Computer <font Color="red">Repairing</font>
                        </b>
                    </h1>
                </div >
                <div className="myshadow my-2 py-4 border border-light " style={{
                    background: 'white'
                }} id="MainRepairingContainer">
                    < div className="container-fluid " data- aos="fade-down" >
                        <table className="table table-hover">
                            <table className="table table-bordered border-primary  table-sm table-hover">
                                <tr className="headText">
                                    <th colSpan="3">CHN (Certificate in Hardware and Networking) </th>
                                </tr>
                                <tr className="my-row-color">
                                    <th colSpan="2">COURSE CONTENTS
                                    </th>
                                    <th style={{borderLeft: 'none'}} >
                                        DURATION: 3 MONTHS </th>
                                </tr>
                                <tr>
                                    <td>Overview of M.S. Office </td>
                                    <td>O.S. Installation</td>
                                    <td>Software Management</td>
                                </tr>
                                <tr>
                                    <td>Computer Assembling</td>
                                    <td>Trubleshooting of computer</td>
                                    <td className="text-danger bg-body-tertiary">Lab & Projects Work</td>
                                </tr>
                            </table>
                        </table>
                    </div >
                </div >
            </div >
        </>
    );
}