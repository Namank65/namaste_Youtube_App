import React from 'react';
import { CommentsList } from './Comment';

const commemtsData = [
    {
        name: "Naman",
        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
        reply: [
            {
                name: "Naman",
                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                reply: [
                    {
                        name: "Naman",
                        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                        reply: [
                            {
                                name: "Naman",
                                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                                reply: [

                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: "Naman",
                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                reply: [
                    {
                        name: "Naman",
                        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                        reply: [
                            {
                                name: "Naman",
                                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                                reply: [

                                ]
                            },
                        ]
                    },
                ]
            },

        ]
    },
    {
        name: "Naman",
        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
        reply: [
            {
                name: "Naman",
                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                reply: [

                ]
            },
            {
                name: "Naman",
                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                reply: [
                    {
                        name: "Naman",
                        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                        reply: [

                        ]
                    },
                ]
            },

        ]
    },
    {
        name: "Naman",
        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
        reply: [
            {
                name: "Naman",
                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                reply: [
                    {
                        name: "Naman",
                        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                        reply: [

                        ]
                    },
                    {
                        name: "Naman",
                        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                        reply: [
                            {
                                name: "Naman",
                                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                                reply: [
                                    {
                                        name: "Naman",
                                        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                                        reply: [
                                            {
                                                name: "Naman",
                                                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                                                reply: [

                                                ]
                                            },

                                        ]
                                    },
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: "Naman",
                text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                reply: [

                ]
            },

        ]
    },
    {
        name: "Naman",
        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
        reply: [

        ]
    },
    {
        name: "Naman",
        text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
        reply: [    {
            name: "Naman",
            text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
            reply: [
                {
                    name: "Naman",
                    text: "lorem, jcvhdv jcfvhfsdhjv dfusfoas opdfsdofvl;dv jfsdvjvosdjhdsijv",
                    reply: [
            
                    ]
                },
            ]
        },

        ]
    }
];


const CommentsContainer = () => {
    return (
        <div className='p-4 text-left'>
            <h1 className='font-bold text-xl pb-8'>Comments:-</h1>
            <CommentsList comments={commemtsData} />
        </div>
    )
};

export default CommentsContainer;