import * as React from 'react';
import { Table } from '.';
import { Container } from '../../layout/container';

export const Default = () => (
  <Container fluid padding={6}>
    <Table>
      <thead>
        <tr>
          <th>
            <abbr title="Position">Pos</abbr>
          </th>
          <th>Team</th>
          <th>
            <abbr title="Played">Pld</abbr>
          </th>
          <th>
            <abbr title="Won">W</abbr>
          </th>
          <th>
            <abbr title="Drawn">D</abbr>
          </th>
          <th>
            <abbr title="Lost">L</abbr>
          </th>
          <th>
            <abbr title="Goals for">GF</abbr>
          </th>
          <th>
            <abbr title="Goals against">GA</abbr>
          </th>
          <th>
            <abbr title="Goal difference">GD</abbr>
          </th>
          <th>
            <abbr title="Points">Pts</abbr>
          </th>
          <th>Qualification or relegation</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>
            <abbr title="Position">Pos</abbr>
          </th>
          <th>Team</th>
          <th>
            <abbr title="Played">Pld</abbr>
          </th>
          <th>
            <abbr title="Won">W</abbr>
          </th>
          <th>
            <abbr title="Drawn">D</abbr>
          </th>
          <th>
            <abbr title="Lost">L</abbr>
          </th>
          <th>
            <abbr title="Goals for">GF</abbr>
          </th>
          <th>
            <abbr title="Goals against">GA</abbr>
          </th>
          <th>
            <abbr title="Goal difference">GD</abbr>
          </th>
          <th>
            <abbr title="Points">Pts</abbr>
          </th>
          <th>Qualification or relegation</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <th>1</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">
              Leicester City
            </a>{' '}
            <strong>(C)</strong>
          </td>
          <td>38</td>
          <td>23</td>
          <td>12</td>
          <td>3</td>
          <td>68</td>
          <td>36</td>
          <td>+32</td>
          <td>81</td>
          <td>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
              title="2016–17 UEFA Champions League">
              Champions League group stage
            </a>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">
              Arsenal
            </a>
          </td>
          <td>38</td>
          <td>20</td>
          <td>11</td>
          <td>7</td>
          <td>65</td>
          <td>36</td>
          <td>+29</td>
          <td>71</td>
          <td>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
              title="2016–17 UEFA Champions League">
              Champions League group stage
            </a>
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">
              Tottenham Hotspur
            </a>
          </td>
          <td>38</td>
          <td>19</td>
          <td>13</td>
          <td>6</td>
          <td>69</td>
          <td>35</td>
          <td>+34</td>
          <td>70</td>
          <td>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
              title="2016–17 UEFA Champions League">
              Champions League group stage
            </a>
          </td>
        </tr>
        <tr className="is-selected">
          <th>4</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">
              Manchester City
            </a>
          </td>
          <td>38</td>
          <td>19</td>
          <td>9</td>
          <td>10</td>
          <td>71</td>
          <td>41</td>
          <td>+30</td>
          <td>66</td>
          <td>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
              title="2016–17 UEFA Champions League">
              Champions League play-off round
            </a>
          </td>
        </tr>
        <tr>
          <th>5</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">
              Manchester United
            </a>
          </td>
          <td>38</td>
          <td>19</td>
          <td>9</td>
          <td>10</td>
          <td>49</td>
          <td>35</td>
          <td>+14</td>
          <td>66</td>
          <td>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
              title="2016–17 UEFA Europa League">
              Europa League group stage
            </a>
          </td>
        </tr>
        <tr>
          <th>6</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">
              Southampton
            </a>
          </td>
          <td>38</td>
          <td>18</td>
          <td>9</td>
          <td>11</td>
          <td>59</td>
          <td>41</td>
          <td>+18</td>
          <td>63</td>
          <td>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
              title="2016–17 UEFA Europa League">
              Europa League group stage
            </a>
          </td>
        </tr>
        <tr>
          <th>7</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">
              West Ham United
            </a>
          </td>
          <td>38</td>
          <td>16</td>
          <td>14</td>
          <td>8</td>
          <td>65</td>
          <td>51</td>
          <td>+14</td>
          <td>62</td>
          <td>
            Qualification for the{' '}
            <a
              href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round"
              title="2016–17 UEFA Europa League">
              Europa League third qualifying round
            </a>
          </td>
        </tr>
        <tr>
          <th>8</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">
              Liverpool
            </a>
          </td>
          <td>38</td>
          <td>16</td>
          <td>12</td>
          <td>10</td>
          <td>63</td>
          <td>50</td>
          <td>+13</td>
          <td>60</td>
          <td />
        </tr>
        <tr>
          <th>9</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">
              Stoke City
            </a>
          </td>
          <td>38</td>
          <td>14</td>
          <td>9</td>
          <td>15</td>
          <td>41</td>
          <td>55</td>
          <td>−14</td>
          <td>51</td>
          <td />
        </tr>
        <tr>
          <th>10</th>
          <td>
            <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">
              Chelsea
            </a>
          </td>
          <td>38</td>
          <td>12</td>
          <td>14</td>
          <td>12</td>
          <td>59</td>
          <td>53</td>
          <td>+6</td>
          <td>50</td>
          <td />
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default {
  title: 'Table',
  component: Table
};
