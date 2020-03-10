import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, AppBar, Tabs, Tab, Toolbar, ListItemText, AppBarProps, Hidden, useTheme } from '@material-ui/core';
import { NavLink } from '../components';
import { PxblueSmall } from '@pxblue/icons-mui';
import { Spacer } from '@pxblue/react-components';
import { useHistory, useLocation } from 'react-router-dom';

export type SharedToolbarProps = AppBarProps & {
    title?: string;
    color?: 'primary' | 'secondary' | 'default';
    subtitle?: string;
    navigationIcon?: JSX.Element;
};

export const SharedToolbar = (props: SharedToolbarProps): JSX.Element => {
    const { title, color, subtitle, navigationIcon, ...other } = props;
    const location = useLocation();
    const theme = useTheme();
    const history = useHistory();
    const [activeRoute, setActiveRoute] = useState(location.pathname);
    const icon = navigationIcon ? navigationIcon : <PxblueSmall />;

    const _navigationIcon = useCallback(
        () => (
            <Hidden smUp={navigationIcon !== undefined}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: theme.spacing(navigationIcon ? 4 : 1),
                        cursor: 'pointer',
                    }}
                >
                    {icon}
                </div>
            </Hidden>
        ),
        [navigationIcon]
    );

    return (
        <>
            <AppBar position="sticky" color={color} elevation={0} style={{ zIndex: 10000 }} {...other}>
                <Toolbar style={{ padding: `0 ${theme.spacing(2)}px` }}>
                    {_navigationIcon()}
                    {props.title ? (
                        <ListItemText
                            id={'dropdown-toolbar-text'}
                            primary={
                                <Typography variant={'h6'} style={{ fontWeight: 600, lineHeight: 1 }}>
                                    {title}
                                </Typography>
                            }
                            secondary={subtitle}
                        />
                    ) : (
                        <Typography>
                            Power Xpert <b>Blue</b>
                        </Typography>
                    )}
                    <Spacer />
                    <Hidden xsDown>
                        <div
                            style={{ display: 'flex', flexWrap: 'wrap', flex: '1 1 auto', justifyContent: 'flex-end' }}
                        >
                            <NavLink to={'/overview'} title={'Getting Started'} />
                            <NavLink to={'/style/color'} title={'Styles'} />
                            <NavLink to={'/patterns/appbars'} title={'Patterns'} />
                            <NavLink to={'/resources'} title={'Resources'} />
                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Hidden smUp>
                <AppBar position="sticky" color={'primary'} style={{ top: 56 }}>
                    <Tabs variant={'fullWidth'} value={
                        activeRoute.startsWith('/overview') ? '/overview' : 
                        activeRoute.startsWith('/style') ? '/style' :
                        activeRoute.startsWith('/patterns') ? '/patterns' : 
                        activeRoute.startsWith('/resources') ? '/resources' : false
                    }>
                        <Tab
                            label="Getting Started"
                            value={'/overview'}
                            onClick={(): void => {
                                history.push('/overview');
                                setActiveRoute('/overview');
                            }}
                        />
                        <Tab
                            label="Styles"
                            value={'/style'}
                            onClick={(): void => {
                                history.push('/style/color');
                                setActiveRoute('/style');
                            }}
                        />
                        <Tab
                            label="Patterns"
                            value={'/patterns'}
                            onClick={(): void => {
                                history.push('/patterns/appbars');
                                setActiveRoute('/patterns');
                            }}
                        />
                        <Tab
                            label="Resources"
                            value={'/resources'}
                            onClick={(): void => {
                                history.push('/resources');
                                setActiveRoute('/resources');
                            }}
                        />
                    </Tabs>
                </AppBar>
            </Hidden>
        </>
    );
};
SharedToolbar.propTypes = {
    title: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary', 'default']),
    subtitle: PropTypes.string,
    navigationIcon: PropTypes.element,
};
SharedToolbar.defaultProps = {
    color: 'primary',
};