import React from 'react';

const List = ({ cities, delFromList }) => {

    return (
        cities && cities.length > 0 ?
            <div className="List">
                <table>
                    <tbody>
                        <tr><th>City</th><th>Temp</th><th></th></tr>
                        {cities.map((item, index) =>
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.temp}&#8451;</td>
                                <td><div className="removeButton" id={index} onClick={delFromList}>&#10007;</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> : null
    )
}

export default List;