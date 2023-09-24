// Mobile
import dart from './mobile/dart.svg'
import firebase from './mobile/firebase.svg'
import flutter from './mobile/flutter.svg'
import java from './mobile/java.svg'
import react_native from './mobile/react native.svg'
import sqlite from './mobile/sqlite.svg'

// Frontend
import bootstrap from './frontend/bootstrap.svg'
import javascript from './frontend/javascript.svg'
import jquery from './frontend/jquery.svg'
import next from './frontend/next.svg'
import react from './frontend/react.svg'
import redux from './frontend/redux.svg'
import sass from './frontend/sass.svg'
import typescript from './frontend/typescript.svg'
import wordpress from './frontend/wordpress.svg'
import yarn from './frontend/yarn.svg'
import materialui from './frontend/materialui.svg'

// Backend
import express from './backend/express.svg'
import mongodb from './backend/mongodb.svg'
import mssql from './backend/mssql.svg'
import mysql from './backend/mysql.svg'
import nest from './backend/nest.svg'
import node from './backend/node.svg'
import postgresql from './backend/postgresql.svg'
import spring from './backend/spring.svg'

// Others
import docker from './others/docker.svg'
import git from './others/git.svg'

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
