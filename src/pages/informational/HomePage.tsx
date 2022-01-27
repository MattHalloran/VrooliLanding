import React from 'react';
import { Slide } from 'components';
import { APP_LINKS, APP_URL, LANDING_LINKS } from 'utils/consts';
import { Box, Button, Grid, Typography } from '@mui/material';
import Relax from 'assets/img/relax.png';
import BlankRoutine from 'assets/img/blank-routine-1.png';
import MonkeyCoin from 'assets/img/monkey-coin-page.png';
import Community from 'assets/img/community.svg';
import Blockchain from 'assets/img/blockchain.png';
import World from 'assets/img/world.png';
import { openLink } from 'utils';
import { useLocation } from 'wouter';

export const HomePage = () => {
    const [, setLocation] = useLocation();

    // Slides in orderbackground: rgb(8,24,79);
    const slides = [
        {
            id: 'routine-explanation',
            title: { text: (<React.Fragment>A <Box fontStyle="italic" display="inline">What</Box> Routine?</React.Fragment>), position: 'center' },
            background: { background: '#d7deef' },
            body: [
                {
                    content: [
                        { title: { text: 'A visual work routine is an intuitive process for completing a specific task - similar to a flowchart', textAlign: 'center' } },
                    ]
                },
                {
                    sm: 6,
                    content: [
                        { title: { text: 'Visual work routines transform entrepreneurship into a process that is:', variant: 'h5' } },
                        { list: { items: [{ text: 'Approachable' }, { text: 'Transparent' }, { text: 'Automatable' }], variant: 'h5' } }
                    ]
                },
                {
                    sm: 6,
                    content: [{ image: { src: BlankRoutine, alt: 'Non-descriptive visual work routine' } }]
                }
            ],
        },
        {
            id: 'understand-your-workflow',
            title: { text: 'Understand Your Workflow', position: 'center', color: 'white' },
            background: { background: 'linear-gradient(344deg, rgba(5,4,34,1) 0%, rgba(16,31,142,1) 75%, rgba(59,102,154,1) 75%)' },
            body: [
                {
                    content: [{ title: { text: `Routines may consist of subroutines, and each subroutine may also have its own routines`, textAlign: 'center', color: 'white' } }]
                },
                {
                    content: [{ title: { text: `This hierarchy simplifies the process of building routines, and allows you to inspect each part of your workflow in as much abstraction as you'd like!`, textAlign: 'center', color: 'white' } }]
                },
                {
                    buttons: [{ text: 'Enter Vrooli', position: 'center', color: 'secondary', link: `${APP_URL}${APP_LINKS.Start}` }]
                }
            ],
        },
        {
            id: 'auto-generated-interfaces',
            title: { text: 'Say Goodbye to Endless Browser Tabs👋' },
            background: { background: '#d7deef' },
            body: [
                {
                    content: [{ title: { text: 'Auto-generated interfaces unlock the possibility of performing entire routines without leaving Vrooli', textAlign: 'center' } }]
                },
                {
                    sm: 6,
                    content: [{ image: { src: MonkeyCoin, alt: 'Routine runner interface example - Minting tokens' } }]
                },
                {
                    sm: 6,
                    content: [
                        { title: { text: 'Benefits of this approach include:', variant: 'h4' } },
                        { list: { items: [{ text: 'Reduced context switching' }, { text: 'Increased focus and organization' }], variant: 'h5' } }
                    ]
                },
            ],
            button: { text: 'How does it work?', position: 'center', link: 'https://matthalloran8.medium.com/the-next-generation-of-global-collaboration-a4839766e29e#82db' }
        },
        {
            id: 'fund-your-idea',
            title: { text: 'Build With the Community', color: 'white' },
            background: { background: '#06125f' },
            body: [
                {
                    sm: 6,
                    content: [{ list: { color: 'white', items: [{ text: 'Expand on public routines' }, { text: 'Discuss and vote on routines' }, { text: 'Fund routine creation with Project Catalyst' }], textAlign: 'center' } }]
                },
                {
                    sm: 6,
                    content: [{ image: { src: Community, alt: 'Community illustration - by Vecteezy' } }]
                },
                {
                    buttons: [{ text: `What's Project Catalyst?`, position: 'center', link: 'https://matthalloran8.medium.com/the-next-generation-of-global-collaboration-a4839766e29e#4f79' }]
                }
            ],
        },
        {
            id: 'blockchain-and-ai',
            title: { text: 'Blockchain and AI Support' },
            background: { background: '#d7deef' },
            body: [
                {
                    sm: 6,
                    content: [{ image: { src: Blockchain, alt: 'Blockchain illustration - by Vecteezy' } }]
                },
                {
                    sm: 6,
                    content: [
                        { title: { text: 'Routines can trigger smart contracts, bringing the power of the Cardano blockchain to your fingertips', paddingBottom: '32px' } },
                        { title: { text: 'Smart contracts allow for automated handling of resources - such as money and compute - drastically increasing the number of routines that can be run without human intervention' } }
                    ]
                },
            ],
        },
        {
            id: 'join-the-movement',
            title: { text: 'Join the Movement', style: 'pop' },
            background: { image: World, fixed: true },
            body: [
                {
                    content: [{ title: { text: `Be one of the first users when the project launches in Q1 2022. Let's change the world together!💙`, color: 'white', textAlign: 'center' } }]
                },
                {
                    content: [{ video: { link: 'Avyeo1f38Aw' } }]
                },
                {
                    buttons: [
                        { text: 'Log In', position: 'center', color: 'secondary', link: `${APP_URL}${APP_LINKS.Start}` },
                        { text: 'View Proposal', position: 'center', color: 'secondary', link: 'https://cardano.ideascale.com/a/dtd/Community-Made-Interactive-Guides/367058-48088' },
                        { text: 'Roadmap', position: 'center', color: 'secondary', link: LANDING_LINKS.Roadmap }
                    ]
                }
            ]
        },
    ]

    return (
        <Box sx={{ paddingTop: '10vh' }}>
            <Slide id="get-things-done-easy" sx={{ color: 'white', background: 'linear-gradient(142deg, rgba(8,24,79,1) 16%, rgba(12,48,113,1) 61%, rgba(42,123,184,1) 93%)' }}>
                <Typography variant='h2' component="h1" textAlign="center">Become an Entrepreneur — Without the Hassle!</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" margin='auto'>
                            Getting things done has never been easier, through the power of visual work routines
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ justifyContent: 'center', height: '100%', display: 'flex' }}>
                            <img
                                alt="Man relaxing at beach - by Vecteezy"
                                src={Relax}
                                style={{
                                    maxWidth: '90%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Button color="secondary" onClick={() => openLink(setLocation, LANDING_LINKS.Mission)}>Learn More</Button>
            </Slide>
            <Slide id="routine-explanation">

            </Slide>
            <Slide id="understand-your-workflow">

            </Slide>
            <Slide id="auto-generated-interfaces">

            </Slide>
            <Slide id="fund-your-idea">

            </Slide>
            <Slide id="blockchain-and-ai">

            </Slide>
            <Slide id="join-the-movement">
                
            </Slide>
        </Box>
    );
}