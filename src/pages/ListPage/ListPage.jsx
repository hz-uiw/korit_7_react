/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

function ListPage(props) {
    return (
        <div>
            <div>
                <input type="text" />
                <button>검색</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TITLE</td>
                        </tr>
                    </thead>
                </table>
                <div>

                </div>
            </div>
        </div>
    );
}

export default ListPage;