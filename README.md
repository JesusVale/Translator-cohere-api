# Translator API with Cohere
This is a Rest API made with node and React that uses [Cohere API](https://cohere.com/) to translate text

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installing](#installing)
- [Usage](#usage)

## About
This project was developed with Node + Typescript, and it allows to translate text from different languages

#### Supported Languages
| Language  | Code |
|------------|----|  
| Arabic     | ar |
| Chinese    | ch |
| English    | en |
| Filipino   | tl |
| French     | fr |
| German     | de |
| Japanese   | ja |
| Korean     | ko |
| Norwegian  | no |
| Portuguese | pt |
| Russian    | ru |
| Spanish    | es |
| Swedish    | sv |
| Turkish    | tr |     


## Getting Started
For the correct functioning of the api you need to register in  [Cohere API](https://cohere.com/) to get an API Key

## Installing
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/JesusVale/Translator-cohere-api

# Install dependencies
$ npm install

```
#### Create .env file
You need to create a .env for enviroment Variables, like this:
```bash
# Port you want to use for this api
PORT=8080
# Api key from cohere API
API_KEY_COHERE=YOUR_API_KEY
```


## Usage
### Request
`GET /api/translate`
#### Query params
|Param       | Description |
|------------|-------------|
|from        | The language from the one you want to translate, it takes any code of language (look at [Supported Languages](#supported-languages)). It also can take the value "auto" that detects the language automatically |
|to        | The language to the one you want to translate, it takes any code of language (look at [Supported Languages](#supported-languages)) |
|to        | The text you want to translate |

#### Example
`http://localhost:8080/api/translate/?from=en&to=es&text=Hello`

### Succesful Response
```bash
{
    # Text you wanted to translante
    from: string
    # Translation of the text in the language chosen
    translation: string
}
```