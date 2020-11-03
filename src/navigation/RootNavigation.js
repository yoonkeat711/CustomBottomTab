import * as React from 'react';

export const navigationRef = React.createRef();

export const isReadyRef = React.createRef();

export function navigate(name, params) {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current?.navigate(name, params);
    } else {
        console.warn('navigationRef is not ready !! ');
    }
}

export function goBack() {
    navigationRef.current.goBack();
}