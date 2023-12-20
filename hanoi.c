#include<stdio.h>

void tower(int n,int source,int temp,int destination)
{
    if(n==0)return;
    tower(n-1,source,destination,temp);
    printf("\nMove disc %d from %c to %c ",n,source,destination);
    tower(n-1,temp,source,destination);
}
void main()
{
    
}