#!/bin/bash

basePort=`cat /home/oracle/basePort.txt`
echo "Base PortNumber: ${basePort}" >> /home/oracle/sshTunnel.log

sshPort="22${basePort}"
echo "SSH PortNumber: ${sshPort}" >> /home/oracle/sshTunnel.log

autosshBasePort="20${basePort}"
autosshEchoPort="21${basePort}"

#autossh -M ${autosshBasePort}:${autosshEchoPort} -q -N -o "ServerAliveInterval 60" -o "ServerAliveCountMax 3" -R [::]:${sshPort}:localhost:22 ports@streams.opcau.com >> /home/oracle/sshTunnel.log
autossh -M ${autosshBasePort}:${autosshEchoPort} -q -N -o "ServerAliveInterval 60" -o "ServerAliveCountMax 3" -R [::]:${sshPort}:localhost:22 jump@132.145.45.69 >> /home/oracle/sshTunnel.log
