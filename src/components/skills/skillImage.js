// Mobile
import dart from './../../assets/webp/mobile/dart.webp'
import firebase from './../../assets/webp/mobile/firebase.webp'
import flutter from './../../assets/webp/mobile/flutter.webp'
import java from './../../assets/webp/mobile/java.webp'
import react_native from './../../assets/webp/mobile/react native.webp'
import sqlite from './../../assets/webp/mobile/sqlite.webp'

// Frontend
import bootstrap from './../../assets/webp/frontend/bootstrap.webp'
import javascript from './../../assets/webp/frontend/javascript.webp'
import jquery from './../../assets/webp/frontend/jquery.webp'
import next from './../../assets/webp/frontend/next.webp'
import react from './../../assets/webp/frontend/react.webp'
import redux from './../../assets/webp/frontend/redux.webp'
import sass from './../../assets/webp/frontend/sass.webp'
import typescript from './../../assets/webp/frontend/typescript.webp'
import wordpress from './../../assets/webp/frontend/wordpress.webp'
import materialui from './../../assets/webp/frontend/materialui.webp'

// Backend
import express from './../../assets/webp/backend/express.webp'
import mongodb from './../../assets/webp/backend/mongodb.webp'
import mssql from './../../assets/webp/backend/mssql.webp'
import mysql from './../../assets/webp/backend/mysql.webp'
import nest from './../../assets/webp/backend/nest.webp'
import node from './../../assets/webp/backend/node.webp'
import postgresql from './../../assets/webp/backend/postgresql.webp'
import spring from './../../assets/webp/backend/spring.webp'
import laravel from './../../assets/webp/backend/laravel.webp'

// BlockChain
import ethereum from './../../assets/webp/blockchain/ethereum.webp'
import ganache from './../../assets/webp/blockchain/ganache.webp'
import truffle from './../../assets/webp/blockchain/truffle.webp'
import solidity from './../../assets/webp/blockchain/solidity.webp'
import web3js from './../../assets/webp/blockchain/web3js.webp'

// Others
import docker from './../../assets/webp/others/docker.webp'
import git from './../../assets/webp/others/git.webp'

export const skills = {
    // Mobile
    dart,
    firebase,
    flutter,
    java,
    materialui,
    react_native,
    sqlite,

    // Frontend
    bootstrap,
    javascript,
    jquery,
    next,
    react,
    redux,
    sass,
    typescript,
    wordpress,
    laravel,

    // Backend
    express,
    mongodb,
    mssql,
    mysql,
    nest,
    node,
    postgresql,
    spring,

    // BlockChain
    ethereum,
    ganache,
    truffle,
    solidity,
    web3js,

    // Others
    docker,
    git,
}

export const skillImage = skill => skills[skill]
