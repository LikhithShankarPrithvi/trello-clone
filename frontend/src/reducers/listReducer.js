//import React from 'react';

const initialState = {
    lists :[
        {
            id:0,
            title:'Welcome',
            card :[
                {
                    id:0,
                    text:'Work with Trello With Ease'
                },
                {
                    id:1,
                    text:'Try Creating Lists'
                }
            ]
        }
    ]

}

export default function appReducer(state=initialState,action){
    switch(action.type){
        default:
            return state;
    }
}
