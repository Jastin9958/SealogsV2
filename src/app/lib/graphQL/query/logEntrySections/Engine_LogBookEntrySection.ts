import gql from 'graphql-tag'

export const Engine_LogBookEntrySection = gql`
    query GetEngine_LogBookEntrySections($id: [ID]!) {
        readEngine_LogBookEntrySections(filter: { id: { in: $id } }) {
            nodes {
                id
                archived
                subView
                fuelStart
                nauticalMiles
                fuelEnd
                fuelAdded
                hoursRun
                engine {
                    id
                    archived
                    title
                }
                engineStartStop {
                    id
                    hoursStart
                    hoursEnd
                    totalHours
                    timeStart
                    timeEnd
                    vehicleDutySessionID
                    engineID
                }
                engineRunningCheck {
                    id
                    archived
                    entryTime
                    manifoldTemp
                    genSetTemp
                    coolantTemp
                    coolantLevelOK
                    fuelTemp
                    shaftBearingTemp
                    oilLevelOK
                    oilPressure
                    lubeOilLevelOK
                    lubeOilTemp
                    lubeOilPressure
                    lubeFilterPressure
                    fuelPressure
                    fuelDayTankLevel
                    headerTankLevel
                    fuelRate
                    volts
                    kwLoad
                    overboardPressure
                    overboardDischarge
                    maintenanceActions
                    pyros
                    boost
                    waterTemp
                    airTemp
                    rpm
                    rack
                    genSetOP
                    genSetWT
                    gearboxOP
                    gearboxCLOP
                    gearboxOT
                    hrpop
                    engine {
                        id
                        title
                    }
                    seaLogsMember {
                        id
                        firstName
                        surname
                    }
                }
            }
        }
    }
`
