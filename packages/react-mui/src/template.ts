export function template() {
    return `
import * as React from 'react';
import {createSvgIcon} from "@mui/material";

export const {{componentName}} = createSvgIcon({{{paths}}}, '{{componentName}}');

export default {{componentName}};    
    `;
}
