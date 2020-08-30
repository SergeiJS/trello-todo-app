import React, { Component } from 'react';

//import TrelloClient, { Trello } from 'react-trello-client';
import Board from 'react-trello';

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'Planned tasks',
            label: '2/2',
            cards: [
                {id: 'Card1', title: 'Reading B.Tracy', description: 'Eat that frog', label: '30 min', },
                {id: 'Card2', title: 'Riding longboard', description: 'riding at random location', label: '60 min', }
            ]
        },
        {
            id: 'lane2',
            title: 'In process',
            label: '0/0',
            cards: [],
        },
        {
            id: 'lane3',
            title: 'Completed tasks',
            label: '0/0',
            cards: [],
        },
    ]
}
export default class Trello extends Component {
    render() {
        return (
            <div>
                <Board data={data} editable={true} />
            </div>
        );
    }
}