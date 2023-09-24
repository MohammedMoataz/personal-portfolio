// Mobile
import dart from './../../assets/svg/mobile/dart.svg'
import firebase from './../../assets/svg/mobile/firebase.svg'
import flutter from './../../assets/svg/mobile/flutter.svg'
import java from './../../assets/svg/mobile/java.svg'
import react_native from './../../assets/svg/mobile/react native.svg'
import sqlite from './../../assets/svg/mobile/sqlite.svg'

// Frontend
import bootstrap from './../../assets/svg/frontend/bootstrap.svg'
import javascript from './../../assets/svg/frontend/javascript.svg'
import jquery from './../../assets/svg/frontend/jquery.svg'
import next from './../../assets/svg/frontend/next.svg'
import react from './../../assets/svg/frontend/react.svg'
import redux from './../../assets/svg/frontend/redux.svg'
import sass from './../../assets/svg/frontend/sass.svg'
import typescript from './../../assets/svg/frontend/typescript.svg'
import wordpress from './../../assets/svg/frontend/wordpress.svg'
import yarn from './../../assets/svg/frontend/yarn.svg'
import materialui from './../../assets/svg/frontend/materialui.svg'

// Backend
import express from './../../assets/svg/backend/express.svg'
import mongodb from './../../assets/svg/backend/mongodb.svg'
import mssql from './../../assets/svg/backend/mssql.svg'
import mysql from './../../assets/svg/backend/mysql.svg'
import nest from './../../assets/svg/backend/nest.svg'
import node from './../../assets/svg/backend/node.svg'
import postgresql from './../../assets/svg/backend/postgresql.svg'
import spring from './../../assets/svg/backend/spring.svg'

// Others
import docker from './../../assets/svg/others/docker.svg'
import git from './../../assets/svg/others/git.svg'

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
    yarn,

    // Backend
    express,
    mongodb,
    mssql,
    mysql,
    nest,
    node,
    postgresql,
    spring,

    // Others
    docker,
    git,
}

export const skillImage = skill => skills[skill]
