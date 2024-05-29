import React from 'react';
import DeadlineBox from './DeadlineBox';
import NavBar from './NavBar';

export default function MainTable(){

    return(
        <div>
            <NavBar />
            <table id='deadline_main_table'>
                <tbody>
                    <tr>
                        <td className='deadline_table_column'>
                            <DeadlineBox />
                        </td>
                        <td className='deadline_table_column'>
                            <DeadlineBox />
                        </td>
                        <td className='deadline_table_column'>
                            <DeadlineBox />
                        </td>
                    </tr>
                    <tr>
                        <td className='deadline_table_column'>
                            <DeadlineBox />
                        </td>
                        <td className='deadline_table_column'>
                            <DeadlineBox />
                        </td>
                        <td className='deadline_table_column'>
                            <DeadlineBox />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}