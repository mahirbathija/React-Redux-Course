import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => { 
    return (
        <div className = 'ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    author = "Sam" 
                    time = "6:00" 
                    commentText = "Foo"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Tam" 
                    time = "7:00" 
                    commentText = "Baz"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Fam" 
                    time = "8:00" 
                    commentText = "Zar"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));