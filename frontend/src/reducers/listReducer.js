//import React from 'react';

const initialState = [
        {
            id:0,
            title:'Welcome',
            cards:[
                {
                    id:0,
                    text:'Work with Trello With Ease'
                },
                {
                    id:1,
                    text:'Try Creating Lists'
                }
            ]
        },
        {
            id:1,
            title:'Trello is Fun',
            cards:[
                {
                    id:0,
                    text:'Start working with multiple tasks'
                },
                {
                    id:1,
                    text:'maintain your workforce'
                },
                {
                    id:2,
                    text:'never leave your work behind'
                }
            ]
        }
    ];

export default function appReducer(state=initialState,action){
    switch(action.type){
        default:
            return state;
    }
}
