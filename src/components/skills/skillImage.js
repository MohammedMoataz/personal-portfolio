// Mobile
import dart from './../../assets/webp/mobile/dart.webp'
import firebase from './../../assets/webp/mobile/firebase.webp'
import flutter from './../../assets/webp/mobile/flutter.webp'
import java from './../../assets/webp/mobile/java.webp'
import sqlite from './../../assets/webp/mobile/sqlite.webp'

// Frontend
import bootstrap from './../../assets/webp/frontend/bootstrap.webp'
import javascript from './../../assets/webp/frontend/javascript.webp'
import typescript from './../../assets/webp/frontend/typescript.webp'
import jquery from './../../assets/webp/frontend/jquery.webp'
import next from './../../assets/webp/frontend/next.webp'
import react from './../../assets/webp/frontend/react.webp'
import redux from './../../assets/webp/frontend/redux.webp'
import sass from './../../assets/webp/frontend/sass.webp'
import wordpress from './../../assets/webp/frontend/wordpress.webp'
import materialui from './../../assets/webp/frontend/materialui.webp'

// Backend
import mongodb from './../../assets/webp/backend/mongodb.webp'
import mssql from './../../assets/webp/backend/mssql.webp'
import mysql from './../../assets/webp/backend/mysql.webp'
import nest from './../../assets/webp/backend/nest.webp'
import node from './../../assets/webp/backend/node.webp'
import spring from './../../assets/webp/backend/spring.webp'

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

    // Backend
    mongodb,
    mssql,
    mysql,
    nest,
    node,
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
