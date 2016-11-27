import React, { Component } from 'react';

import Todo from './Todo';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos, doDelete, doUpdate } = this.props;

        return (
            <div className="todo">
                {
                    todos.map((o, i) => <Todo key={ i } { ...o } doDelete={doDelete} doUpdate={doUpdate}/>)
                }
            </div>
        );
    }
}