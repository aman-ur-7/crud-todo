import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .header_posts{
        background: #898F9C;
        align-items: center;
        display: flex;
        gap: 70px;
        padding: 10px;
        position: sticky;
        font-size: 20px;
        font-weight: 500;

        &>.nav_link{
            color: white;
            text-decoration: none;
        }
    }

    .form_container{
        padding: 20px;
        margin: auto;
        width: 40%;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-transform:capitalize ;

        &>form{
            display: flex;
            flex-direction: column;
            gap: 10px;

            &>input{
                outline: none;
                padding: 10px;
                color: #4267B2;
            }
        }

        button{
            display: flex;
            width: 20%;
            justify-content: center;
            padding: 7px;
            border-radius: 10px;
            cursor: pointer;
            border: 1px solid #898F9C;
            background: #4267B2;
        }
    }

    .card_items{
        display: flex;
        flex-direction: column;

        &>:nth-child(1){
            text-transform: capitalize;
            font-weight: 500;
            margin: auto;
            font-size:39px;
        }

        .card_item{
            text-transform: capitalize;
            gap: 20px;
            margin: 30px;
            text-align: center;
            align-items: center;
            max-width: 30%;
            border: 1px solid black;
            display: flex;
            flex-direction: column;

            .card_content>:nth-child(1){
                font-size: large;
                font-weight: 500;
            }
            .card_link{
                display: flex;
                justify-content: space-between;
                
                &>a{
                    text-transform: capitalize;
                    margin: 3px;
                    text-decoration: none;
                    list-style: none;
                    color: blue;
                }

            }
        }
    }
`
