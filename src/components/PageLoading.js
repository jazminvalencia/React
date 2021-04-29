import { image } from 'faker';
import React from 'react';
import './style/PageLoading.css'

import Loader from '../components/Loader'

function PageLoading(props) {
    return (
        <div className='PageLoading'>
            <Loader></Loader>
        </div>
    );
}

export default PageLoading;